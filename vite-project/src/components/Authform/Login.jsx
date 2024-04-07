import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [inputs, setinputs] = useState({
        email: '',
        password: '',
    })
    return (
        <>
            <Input
                placeholder='Email'
                fontSize={12}
                type='email'
                size={"sm"}
                value={inputs.email}
                onChange={(e) => setinputs({ ...inputs, email: e.target.value })}
            />
            <Input
                placeholder='Password'
                fontSize={12}
                type='password'
                size={"sm"}
                value={inputs.password}
                onChange={(e) => setinputs({ ...inputs, password: e.target.value })}
            />
            <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={12} onClick={"/"}>
                Log In
            </Button>
        </>
    )
}

export default Login