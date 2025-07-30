import { Flex, Text } from "@mantine/core"
import { ImageIcon } from "lucide-react"
import { FC, useRef, useState } from "react"

import { OutlineButton } from "@/shared/ui/buttons"

import s from "./style.module.scss"

interface IProps {
	setUploadFile: (file: any) => void
}
export const ImageUpload: FC<IProps> = ({ setUploadFile }) => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null)
	const [isUploading, setIsUploading] = useState(false)
	const [uploadStatus, setUploadStatus] = useState<string>("")
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUploadFile(event.target.files?.[0])
		const file = event.target.files?.[0]
		if (file) {
			handleFileUpload(file)
		}
	}

	const handleFileUpload = async (file: File) => {
		if (!file.type.startsWith("image/")) {
			setUploadStatus("Please select an image file")
			return
		}

		if (file.size > 5 * 1024 * 1024) {
			setUploadStatus("File size must be less than 5MB")
			return
		}

		setIsUploading(true)
		setUploadStatus("")

		try {
			const reader = new FileReader()
			reader.onload = (e) => {
				setSelectedImage(e.target?.result as string)
			}
			reader.readAsDataURL(file)

			// Simulate upload process
			await new Promise((resolve) => setTimeout(resolve, 2000))

			// const formData = new FormData()
			// formData.append('image', file)
			// const response = await fetch('/api/upload', {
			//   method: 'POST',
			//   body: formData
			// })

			setUploadStatus("Image uploaded successfully!")
		} catch (error) {
			setUploadStatus("Upload failed. Please try again.")
			setSelectedImage(null)
		} finally {
			setIsUploading(false)
		}
	}

	const handleAddImage = () => {
		fileInputRef.current?.click()
	}

	const handleRemoveImage = () => {
		setUploadFile(null)
		setSelectedImage(null)
		setUploadStatus("")
		if (fileInputRef.current) {
			fileInputRef.current.value = ""
		}
	}

	return (
		<>
			<Flex direction={"column"} w={"100%"}>
				<Text className={s.title}>Image</Text>

				<div className={s.imageArea}>
					{selectedImage ? (
						<div className={s.imagePreview}>
							<img
								src={selectedImage || "/placeholder.svg"}
								alt="Selected"
								className={s.previewImage}
							/>
							<button
								className={s.removeButton}
								onClick={handleRemoveImage}
								disabled={isUploading}
							>
								×
							</button>
						</div>
					) : (
						<div className={s.placeholder}>
							<ImageIcon className={s.placeholderIcon} />
							{isUploading && (
								<div className={s.uploadingText}>Uploading...</div>
							)}
						</div>
					)}
				</div>

				<input
					ref={fileInputRef}
					type="file"
					accept="image/*"
					onChange={handleFileSelect}
					className={s.hiddenInput}
				/>

				<OutlineButton
					h={"3rem"}
					className={s.addButton}
					onClick={handleAddImage}
					disabled={isUploading}
				>
					{isUploading
						? "Uploading..."
						: selectedImage
						? "Change image"
						: "Add image"}
				</OutlineButton>

				{uploadStatus && (
					<div
						className={`${s.status} ${
							uploadStatus.includes("success") ? s.success : s.error
						}`}
					>
						{uploadStatus}
					</div>
				)}
			</Flex>
		</>
	)
}
