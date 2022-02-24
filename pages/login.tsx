import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form"
import login from "../firebase/login";

const Login: NextPage = () =>{

    type Inputs = {
        email: string,
        password:string,
    }

    const {register, handleSubmit, watch, formState: {errors} } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => login(data.email, data.password).catch(error => alert(error.message)).then(() => {
        
    });

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", {required: true})}/>
            <input {...register("password", {required: true})} type="password"/>
            <input type="submit"/>
        </form>
    </div>
}

export default Login