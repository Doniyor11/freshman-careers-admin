import IconClose from "@//shared/assets/images/icon/close.svg"
import {
	ActionIcon,
	Flex,
	Modal as ModalCustom,
	ModalProps,
} from "@mantine/core"
import React, { FC } from "react"

import s from "./modal.module.scss"

interface ModalIProps extends ModalProps {
	children?: React.ReactNode
}

export const Modal: FC<ModalIProps> = ({ children, ...otherProps }) => {
	return (
		<>
			<ModalCustom
				withCloseButton={false}
				classNames={{
					root: s.modalRoot,
					content: s.modalContent,
					overlay: s.modalOverlay,
					header: s.modalHeader,
					body: s.modalBody,
					close: s.modalClose,
				}}
				{...otherProps}
			>
				<Flex justify={"flex-end"}>
					<ActionIcon
						bg={"transparent"}
						className={s.closeButton}
						onClick={otherProps.onClose ?? (() => {})}
					>
						<IconClose className={s.closeIcon} />
					</ActionIcon>
				</Flex>
				{children}
			</ModalCustom>
		</>
	)
}
