"use client"

import HomeCard from "./HomeCard"
import { useRouter } from "next/navigation"
import { useState } from "react"
import MeetingModal from "./MeetingModal"
import { useUser } from "@clerk/nextjs"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"

const MeetingTypeList = () => {
    const router = useRouter()
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting'>()

    const { user } = useUser()
    const client = useStreamVideoClient();
    const [values, setValues] = useState({
      dateTime: new Date(),
      description: '',
      link: ''
    })

    const [callDetails, setCallDetails] = useState<Call>()
  

    const createMeeting = async () => {
      if(!client || !user) return;

      try{
        const id = crypto.randomUUID();
        const call = client.call('default', id)

        if(!call) throw new Error('Call not found')

        const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()

        const desription = values.description || 'Instant meeting';

        await call.getOrCreate({
          data: {
            starts_at: startsAt,
            custom: {
              desription
            }
          }
        })

        setCallDetails(call)

        if(!)
      }catch(error){
        console.log(error)
      }
    }

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard
            img = '/icons/add-meeting.svg'
            title = 'New Meeting'
            description = 'Start an Instant meeting'
            handleClick = {() => setMeetingState('isInstantMeeting')}
            className = 'bg-pink-1'
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
         title="Start an Instant Meeting"
         
         />
    </section>
  )
}

export default MeetingTypeList