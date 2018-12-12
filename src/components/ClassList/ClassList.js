import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    // console.log(this.props)
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => {
        // console.log(res)
        this.setState({
          students: res.data
        })
      })
  }

  render() {
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((student, i) => (
          <Link to={`/student/${student.id}`} key={i}><h3>{student.first_name + ' ' + student.last_name}</h3></Link>
          // console.log(student)
        ))}
        <Link to="/"><button>Back</button></Link>
      </div>
    )
  }
}