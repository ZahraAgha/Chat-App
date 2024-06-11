import { io } from "socket.io-client"
import { useSelector} from "react-redux"
const useSocket = () => {
    const user = useSelector(state => state.user.user)
    const socket = io("http://localhost:8000", {
        query: {
            userId: user._id
        }
    })
    return socket
}

export default useSocket; 