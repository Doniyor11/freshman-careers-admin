import { IAddCompany } from "@/feature/companies/add/api/types.ts"
import { useEditCompanyQuery } from "@/feature/companies/edit/api/query.ts"
import { useCompanyEditStore } from "@/feature/companies/edit/model"
import { useGetCompanyQuery } from "@/feature/companies/list/api/query.ts"
import { Button, FileButton, Text } from "@mantine/core"
import Image from "next/image"
import React, { useEffect, useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"

import ImageGallery from "@/shared/assets/images/gallery.png"
import { EnvKeys } from "@/shared/constants/env.ts"
import { Input, Modal } from "@/shared/ui"

import s from "./styles.module.scss"

export const CompanyEdit = () => {
	const [companyEdit, companyId, setCompanyEdit, setCompanyId] =
		useCompanyEditStore((s) => [
			s.companyEdit,
			s.companyId,
			s.setCompanyEdit,
			s.setCompanyId,
		])
	const [file, setFile] = useState<File | null>(null)
	const imageUrl = useMemo(
		() => (file ? URL.createObjectURL(file) : null),
		[file],
	)

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
		setCompanyEdit(false)
		setCompanyId(undefined)
	}

	const { data: DefaultValue } = useGetCompanyQuery(companyId)

	useEffect(() => {
		if (DefaultValue) {
			reset({
				name: DefaultValue.title,
			})
		}
	}, [DefaultValue])

	const { mutate, isPending } = useEditCompanyQuery(onClose)

	const onSubmit = (data: IAddCompany) => {
		mutate({
			image: file,
			id: companyId,
			name: data?.name,
		})
	}

	const displayedImage = file
		? imageUrl
		: DefaultValue?.image
		? `${EnvKeys.NEXT_HOST}/${DefaultValue.image}`
		: ImageGallery.src

	return (
		<Modal size={682} opened={companyEdit} onClose={onClose}>
			<Text className={s.modalTitle}>Edit the company</Text>
			<div className={s.imageWrapper}>
				<Image
					src={displayedImage as any}
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
						<Input label={"Company name"} m={"16px 0"} {...field} />
					)}
				/>

				<Button
					className={s.saveBtn}
					type={"submit"}
					disabled={!isDirty}
					loading={isPending}
				>
					Save
				</Button>
			</form>
		</Modal>
	)
}
