import axios from 'axios';

export async function LoginCall(email: string, password: string) {

    let connected = false;
    try {
        let response = await axios.post(
            "https://reqres.in/api/login",
            {email: email, password: password},
            { headers: { 'Content-Type': 'application/json' } }
        );
        if (response.status === 200) {
            connected = true;
        }
    } catch (e) {
        console.dir(e);
    }

    return connected;
}
