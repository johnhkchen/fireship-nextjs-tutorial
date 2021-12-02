import toast from 'react-hot-toast'

export default function ToastButton() {
    return (
        <button onClick={() => toast.success('hello toast')}>
            Toast Me
        </button >
    )
}