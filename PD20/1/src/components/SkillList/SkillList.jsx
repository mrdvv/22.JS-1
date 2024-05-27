import Git from './Git.jsx'
import Javascript from './Javascript.jsx'
import Python from './Python.jsx'
import MongoDB from './MongoDB.jsx'
import Express from './Express.jsx'
import Mongoose from './Mongoose.jsx'
function SkillList() {

    return (
      <>
        <div className='skillContainer'>
            <Git/>
            <MongoDB/>
            <Javascript/>
            <Python/>
            <Express/>
            <Mongoose/>
        </div>
      </>
    )
  }
  
export default SkillList