import React, {ReactNode} from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image';
import { cn } from '@/lib/utils';
  


interface MeetingModalProps {
    isOpen: boolean;
    onCLose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    image?: string;
    buttonIcon?: string;
}

const MeetingModal = ({
    isOpen, onCLose, title, className, children, handleClick, buttonText,image, buttonIcon}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onCLose}>
        <DialogContent className='flex w-full flex-col gap-6 border-none px-6 bg-dark-2 p-5 text-white'>
            <div className='flex flex-col gap-6'>
                {image && (
                    <div className='flex justify-center'>
                        <Image src={image}
                        alt='image'
                        width={72}
                        height={72}
                        />
                    </div>
                )}
                <h1 className= {cn('text-3xl font-bold leading-[42px]')}>{title}</h1>
            </div>
            
        </DialogContent>
    </Dialog>

  )
}

export default MeetingModal