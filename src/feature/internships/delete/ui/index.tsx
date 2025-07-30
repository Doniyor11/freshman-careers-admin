import { useDeleteInternshipsQuery } from "@/feature/internships/delete/api/query.ts"
import { useInternshipDeleteStore } from "@/feature/internships/delete/model"
import React from "react"

import { DeleteModal } from "@/entities/delete-modal"

export const InternshipDelete = () => {
	const [
		internshipDelete,
		internshipDeleteId,
		setInternshipDelete,
		setInternshipDeleteId,
	] = useInternshipDeleteStore((s) => [
		s.internshipDelete,
		s.internshipDeleteId,
		s.setInternshipDelete,
		s.setInternshipDeleteId,
	])
	const onClose = () => {
		setInternshipDelete(false)
		setInternshipDeleteId(undefined)
	}
	const { mutate } = useDeleteInternshipsQuery(onClose, internshipDeleteId)
	return (
		<>
			<DeleteModal
				name={"company"}
				opened={internshipDelete}
				onClose={onClose}
				onCancel={onClose}
				onDelete={() => mutate(internshipDeleteId as any)}
			/>
		</>
	)
}
