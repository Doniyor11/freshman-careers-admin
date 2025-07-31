import { useAddCompanyQuery } from "@/feature/companies/add/api/query.ts"
import { IAddCompany } from "@/feature/companies/add/api/types.ts"
import { useCompanyAddStore } from "@/feature/companies/add/model"
import { Button, FileButton, Text } from "@mantine/core"
import Image from "next/image"
import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"

import ImageGallery from "@/shared/assets/images/gallery.png"
import { Input, Modal } from "@/shared/ui"

import s from "./styles.module.scss"

export const CompanyAdd = () => {
	const [companyAdd, setCompanyAdd] = useCompanyAddStore((s) => [
		s.companyAdd,
		s.setCompanyAdd,
	])
	const [file, setFile] = useState<File | null>(null)
	const imageUrl = file ? URL.createObjectURL(file) : null

	const {
		reset,
		control,
		handleSubmit,
		formState: { isDirty },
	} = useForm<IAddCompany>({
		mode: "all",
	})
	const onClose = () => {
		setFile(null)
		setCompanyAdd(false)
		reset({
			name: "",
		})
	}

	const { mutate, isPending } = useAddCompanyQuery(onClose)

	const onSubmit = (data: IAddCompany) => {
		mutate({
			name: data?.name,
			image: file,
		})
	}

	return (
		<Modal size={682} opened={companyAdd} onClose={onClose}>
			<Text className={s.modalTitle}>Adding a company</Text>
			<div className={s.imageWrapper}>
				<Image
					src={`${file ? imageUrl : ImageGallery.src}`}
					alt={"image"}
					width={150}
					height={150}
					unoptimized
				/>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FileButton onChange={setFile} accept="image/png,image/jpeg">
					{(props) => (
						<Button className={s.fileBtn} {...props}>
							Upload image
						</Button>
					)}
				</FileButton>

				<Controller
					name={"name"}
					control={control}
					render={({ field }) => (
						<Input label={"Company name"} mt={24} {...field} />
					)}
				/>

				<Button
					className={s.saveBtn}
					type={"submit"}
					disabled={!isDirty || !file}
					loading={isPending}
				>
					Save
				</Button>
			</form>
		</Modal>
	)
}
