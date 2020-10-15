import axios from 'axios';

const authInstance = axios.create({
    baseURL: `http://127.0.0.1:3000/auth`,
    headers: { 'Content-Type': 'application/json' }
});

export const AuthAPI = {
    signIn(email: string, password: string) {
        return authInstance.post('/signin', { email, password }).then(res => res.data.data);
    },

    refreshToken(token: string) {
        return authInstance.post('/refresh-token', { token }).then(res => res.data.data);
    },

    signOut(token: string) {
        return authInstance.post('/signout', { token }).then(res => res.data);
    }
}