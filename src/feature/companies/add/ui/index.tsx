import React, { useState } from "react"
import { Input, Modal } from "@/shared/ui"
import { Button, FileButton, Text } from "@mantine/core"
import s from "./styles.module.scss"
import Image from "next/image"
import { Controller, useForm } from "react-hook-form"
import { IAddCompany } from "@/feature/companies/add/api/types.ts"
import { useAddCompanyQuery } from "@/feature/companies/add/api/query.ts"
import { useCompanyAddStore } from "@/feature/companies/add/model"
import ImageGallery from "@/shared/assets/images/gallery.png"

export const CompanyAdd = () => {
	const [companyAdd, setCompanyAdd] = useCompanyAddStore((s) => [s.companyAdd, s.setCompanyAdd])
	const [file, setFile] = useState<File | null>(null)
	const imageUrl = file ? URL.createObjectURL(file) : null

	const {
		control,
		handleSubmit,
		formState: { isDirty }
	} = useForm<IAddCompany>({
		mode: "all"

	})
	const onClose = () => {
		setFile(null)
		setCompanyAdd(false)
	}

	const { mutate,isPending } = useAddCompanyQuery(onClose)


	const onSubmit = (data: IAddCompany) => {
		mutate({
			name: data?.name,
			image: file
		})
	}

	return (
		<Modal size={682} opened={companyAdd} onClose={onClose}>
			<Text className={s.modalTitle}>
				Adding a company
			</Text>
			<div className={s.imageWrapper}>
				<Image src={`${file ? imageUrl : ImageGallery.src}`} alt={"image"} width={150} height={150} unoptimized />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FileButton onChange={setFile} accept="image/png,image/jpeg">
					{(props) => <Button className={s.fileBtn} {...props}>Upload image</Button>}
				</FileButton>

				<Controller name={"name"} control={control} render={({ field }) => (
					<Input label={"Company name"} mt={24} {...field} />
				)} />

				<Button className={s.saveBtn} type={"submit"} disabled={!isDirty || !file} loading={isPending}>
					Save
				</Button>
			</form>
		</Modal>
	)
}