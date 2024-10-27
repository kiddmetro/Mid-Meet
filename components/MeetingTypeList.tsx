"use client"

import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation"
import { useState } from "react"
import MeetingModal from "./MeetingModal"

const MeetingTypeList = () => {
    const router = useRouter()
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting'>()

    const createMeeting = () => {}

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard
            img = '/icons/add-meeting.svg'
            title = 'New Meeting'
            description = 'Start an Instant meeting'
            handleClick = {() => setMeetingState('isInstantMeeting')}
            className = 'bg-orange-1'
         />

        <HomeCard
            img = '/icons/schedule.svg'
            title = 'Schedule Meeting'
            description = 'Plan your meeting'
            handleClick = {() => setMeetingState('isScheduleMeeting')}
            className = 'bg-green-1'
         />

        <HomeCard
            img = '/icons/recordings.svg'
            title = 'View Recordings'
            description = 'Check out your recordings'
            handleClick = {() =>  setMeetingState('isJoiningMeeting')}
            className = 'bg-purple-1'
         />

        <HomeCard
            img = '/icons/join-meeting.svg'
            title = 'Join Meeting'
            description = 'Via Invitation link'
            handleClick = {() => setMeetingState('isJoiningMeeting')}
            className = 'bg-yellow-1'
         />

         <MeetingModal
         isOpen = {meetingState === 'isInstantMeeting'}
         onCLose = {() => setMeetingState(undefined)}
         className = 'text-center'
         buttonText = 'Start Meeting'
         handleClick = {createMeeting}
         
         />
    </section>
  )
}

export default MeetingTypeList