import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'Valentin-Gago',
    name: 'Valentin Gago Fernandez',
    isFollowing: true
  },
  {
    userName: 'Vane',
    name: 'Vanessa Gago Fernandez',
    isFollowing: false
  },
  {
    userName: 'Pili ',
    name: 'Pilar Gago Fernandez',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
  }
]

export function App () {
  // eslint-disable-next-line no-unused-vars
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
