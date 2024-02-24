import { Middleware } from '@nuxt/types'

const Axios: Middleware =  (context) => {
    context.$axios.onError((error) => {
        if (error?.response?.status === 401) {
            context.$auth.logout()
        }
    })
}

export default Axios