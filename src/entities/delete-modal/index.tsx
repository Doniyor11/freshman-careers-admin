import { Box, Button, Text } from "@mantine/core"
import cx from "clsx"
import React, { FC } from "react"

import { Modal } from "@/shared/ui"

import s from "./styles.module.scss"

interface IDeleteModalType {
	name: string
	opened: boolean
	onClose: () => void
	onCancel: () => void
	onDelete: () => void
}

export const DeleteModal: FC<IDeleteModalType> = ({
	name,
	opened,
	onClose,
	onDelete,
	onCancel,
}) => {
	return (
		<>
			<Modal size={568} opened={opened} onClose={onClose} centered>
				<Box className={s.box}>
					<h2>Delete the {name}?</h2>
					<Text>
						Are you sure you want to delete an {name}? Once deleted, the
						{name} and feedback cannot be restored. Delete an {name}?
					</Text>
					<Button className={cx(s.btn, s.filled)} onClick={onCancel}>
						Cancel
					</Button>
					<Button className={cx(s.btn, s.outlined)} onClick={onDelete}>
						Delete
					</Button>
				</Box>
			</Modal>
		</>
	)
}
