const Spinner = () => {
    return(
        <div className="grid min-h-[65vh] place-content-center">
            <div className="flex items-center gap-2 text-gray-500">
                <span className="h-24 w-24 block rounded-full border-4 border-t-blue-300 animate-spin"></span>
            </div>
        </div>
    )
}

export default Spinner