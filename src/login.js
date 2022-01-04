import React from 'react'
import {Form} from 'semantic-ui-react'

function login() {
    return (
        <div>
            <Form >
      <Form.Field>
      <label>
          Email
      </label>
      <input placeholder='first name'/>
      </Form.Field>
      <Form.Field>
      <label>
          Email
      </label>
      <input placeholder='last name'/>
      </Form.Field>
    </Form>
        </div>
    )
}

export default login
