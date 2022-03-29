import { useForm } from "react-hook-form";
import users from "../../fakeapi/usersJson";

const Login = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const send = (data) => {
        if (data) {
            let findUser = users.find((item) => {
                if (item.username == data.username) {
                    return item;
                }
            })
            console.log(findUser);
        }
    }



    return (
        <div className="p-6 rounded-md border" style={{ minWidth: "400px", background:"#2a2a2a" }}>
            
            <div className="text-white text-center mt-2 mb-5">
                <span>Welcome back</span>
                <h1 className="text-white text-lg">Log into your account</h1>
            </div>


            <div className="space-y-4 mb-5">
                <div>
                    <label>Username</label>
                    <input className="w-full p-2 rounded-md" />
                </div>

                <div>
                    <label>Password</label>
                    <input className="w-full p-2 rounded-md" />
                </div>
            </div>

            <div>
                <button onClick={() => send()} className="w-full text-center p-3 bg-blue-500 rounded-lg text-white">Login now</button>
            </div>
        </div>
    )
}

export default Login;