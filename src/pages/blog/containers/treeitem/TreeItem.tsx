import { Date } from 'components/date/Date'
import Description from 'components/description/Description'
import Title from 'components/title/Title'

const TreeItem = () => {
  return (
    <div className='flex flex-row gap-5 mb-4'>
        <Date colorType='active' className='w-60'>21 June, 2012</Date>
        <div className='flex flex-col gap-1'>
            <Title color='black' size='lg'>Tailwind CSS v3.1: You wanna get nuts? Come on, let's get nuts!</Title>
            <Description color='black' size='base'>It’s been a while since I’ve written about what we’ve been working on so I have a lot to share! Too much honestly — my main motivator for even getting this update out is that we’ve got even more stuff coming next week, and I feel like I’m not allowed to share that stuff until I share all of the stuff we’ve already shipped.</Description>
        </div>
    </div>
  )
}

export default TreeItem