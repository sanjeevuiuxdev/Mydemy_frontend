import React, { useContext, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ThemeContext } from '@/context/ThemeContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

    const { currency, token, setToken, backendUrl , navigate } = useContext(ThemeContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onRegisterSubmitHandler = async (e) => {
        e.preventDefault()
        // console.log(registerEmail, registerName, registerPassword);
        try {
            const registerUser = await axios.post(backendUrl+"/api/v1/user/register", { name, email, password })
            if(registerUser.data.success){
                toast.success(registerUser.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
        
    }

    const onLoginSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const loginUser = await axios.post(backendUrl+"/api/v1/user/login", {email, password})
            if(loginUser.data.success){
                toast.success(loginUser.data.message)
                console.log(loginUser);
                setToken(loginUser.data.token)
                localStorage.setItem("MyDemy token",loginUser.data.token)
            }
            // console.log(loginUser);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    useEffect(()=>{
        if(token){
            navigate('/')
        }
    },[token])

    return (
        <div className='flex items-center w-full justify-center login_page'>
            <Tabs defaultValue="Login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Sign Up">Sign Up</TabsTrigger>
                    <TabsTrigger value="Login">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="Sign Up">
                    <form onSubmit={onRegisterSubmitHandler}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Sign Up</CardTitle>
                                <CardDescription>
                                    Sign Up to your account here. Click sign up to register your account.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input onchange={(e) => setName(e.target.value)} value={name} id="name" type="text" placeholder="Enter Name" required={true} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="name">Email</Label>
                                    <Input onchange={(e) => setEmail(e.target.value)} value={email} id="email" type="email" placeholder="Enter Email" required={true} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Password</Label>
                                    <Input onchange={(e) => setPassword(e.target.value)} value={password} id="password" type="password" placeholder="Enter Password" required={true} />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Sign Up</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </TabsContent>
                <TabsContent value="Login">
                    <form onSubmit={onLoginSubmitHandler}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Login your account here. Click login to login your account.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Email</Label>
                                    <Input onchange={(e) => setEmail(e.target.value)} value={email} id="email" type="email" placeholder="Enter Email" required={true} />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Password</Label>
                                    <Input onchange={(e) => setPassword(e.target.value)} value={password} id="password" type="password" placeholder="Enter Password" required={true} />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Login</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login
