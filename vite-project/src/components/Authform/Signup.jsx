import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword'

const Signup = () => {
    const [inputs, setinputs] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        password: '',
    })
    const [showPassword, setShowPassword] = useState(false);
    const {loading, error, signup} = useSignUpWithEmailAndPassword();
    return (
        <>
            <Input placeholder='First Name'
                fontSize={12}
                type='text'
                value={inputs.firstname}
                size={"sm"}
                onChange={(e) => setinputs({ ...inputs, firstname: e.target.value })}
            />
            <Input placeholder='Last Name'
                fontSize={12}
                type='text'
                value={inputs.lastname}
                size={"sm"}
                onChange={(e) => setinputs({ ...inputs, lastname: e.target.value })}
            />
            <Input placeholder='Contact'
                fontSize={12}
                type='number'
                value={inputs.contact}
                size={"sm"}
                onChange={(e) => setinputs({ ...inputs, contact: e.target.value })}
            />
            <Input
                placeholder='Email'
                fontSize={12}
                type='email'
                value={inputs.email}
                size={"sm"}
                onChange={(e) => setinputs({ ...inputs, email: e.target.value })}
            />
            <InputGroup>
                <Input
                    placeholder='Password'
                    fontSize={12}
                    type={showPassword ? "text" : "password"}
                    value={inputs.password}
                    size={"sm"}
                    onChange={(e) => setinputs({ ...inputs, password: e.target.value })}
                    
                />
                <InputRightElement h="full">
                    <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>

            </InputGroup>
            
            {error && (
                <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}

            <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={12}
            isLoading={loading}
            onClick={() => signup(inputs)}>
                Sign Up
            </Button>

        </>
    )
}

export default Signup