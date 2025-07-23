import React, { useEffect, useState } from "react"
import { Input, Modal } from "@/shared/ui"
import { Button, FileButton, Text } from "@mantine/core"
import s from "./styles.module.scss"
import Image from "next/image"
import { Controller, useForm } from "react-hook-form"
import { IAddCompany } from "@/feature/companies/add/api/types.ts"
import ImageGallery from "@/shared/assets/images/gallery.png"
import { useEditCompanyQuery } from "@/feature/companies/edit/api/query.ts"
import { useCompanyEditStore } from "@/feature/companies/edit/model"
import { useGetCompanyQuery } from "@/feature/companies/list/api/query.ts"

export const CompanyEdit = () => {
	const [companyEdit, companyId, setCompanyEdit, setCompanyId] = useCompanyEditStore((s) => [s.companyEdit, s.companyId, s.setCompanyEdit, s.setCompanyId])
	const [file, setFile] = useState<File | null>(null)
	const imageUrl = file ? URL.createObjectURL(file) : null
	console.log(companyId)
	const {
		reset,
		control,
		handleSubmit,
		formState: { isDirty }
	} = useForm<IAddCompany>({
		mode: "all"
	})

	const onClose = () => {
		setFile(null)
		setCompanyEdit(false)
		setCompanyId(undefined)
	}

	const { data: DefaultValue } = useGetCompanyQuery(companyId)
	console.log(DefaultValue)
	useEffect(() => {
		reset({
			name: DefaultValue?.name
		})
	}, [DefaultValue])

	const { mutate, isPending } = useEditCompanyQuery(onClose)


	const onSubmit = (data: IAddCompany) => {
		mutate({
			image: file,
			id: companyId,
			name: data?.name
		})
	}

	return (
		<Modal size={682} opened={companyEdit} onClose={onClose}>
			<Text className={s.modalTitle}>
				Edit the company
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