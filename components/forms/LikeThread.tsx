"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { likeThread } from "@/lib/actions/thread.actions";
import path from "path";

interface Props {
    threadId: string;
    userId: string;
    likes: number
    likedByUser: string[]
}

function LikeThread({
    threadId,
    userId,
    likes,
    likedByUser
}: Props) {
    const pathname = usePathname();
    const isAlreadyLiked = likedByUser.includes(userId);

    // if (currentUserId !== authorId || pathname === "/") return null;

    return (

        <div className="flex gap-1">
            <Image
                // heart-filled
                // src={'/assets/heart.svg'}
                src={isAlreadyLiked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
                alt='heart'
                width={24}
                height={24}
                className='cursor-pointer object-contain'
                onClick={async () => {
                    await likeThread(threadId, userId, pathname,);
                    
                }}
            />
            <p className={`text-[14px]  ${isAlreadyLiked ? "text-red-500" : "text-white"}`}>
                {likes}
            </p>
        </div>

    );
}

export default LikeThread;

