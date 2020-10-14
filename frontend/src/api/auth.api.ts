import axios from 'axios';

const authInstance = axios.create({
    baseURL: `/auth`,
    headers: { 'Content-Type': 'application/json' }
});

export const AuthAPI = {
    signIn(email: string, password: string) {
        return authInstance.post('/signin', { email, password }).then(res => res.data);
    },

    refreshToken(token: string) {
        return authInstance.post('/refresh-token', { token }).then(res => res.data);
    },

    signOut(token: string) {
        return authInstance.post('/signout', { token }).then(res => res);
    }
}