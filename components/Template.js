import Clock from 'react-live-clock'

function Template({ children }) {
    return(
      <div className='template'>
        <div className='title'>TO DO LIST</div>
        <div className='clock'><Clock format={'YY-MM-DD'} /></div>
        <div>{ children }</div>
      </div>
    )
}

export default Template