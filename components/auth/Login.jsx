import { useForm } from "react-hook-form";
import users from "../../fakeapi/usersJson";

const Login = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const send = (data) => {
        if(data){
            let findUser = users.find((item) => {
                if(item.username == data.username){
                    return item;
                }
            })
            console.log(findUser);
        }
    }



    return (<div></div>)

}

export default Login;