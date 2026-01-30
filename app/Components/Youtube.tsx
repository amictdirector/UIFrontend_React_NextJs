const Youtube = ({ videoId,autoplay,mute,loop,playlist }) => {
    return (
        <>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&mute=${mute}&loop=${loop}&playlist=${playlist}`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                    }}
                />
            </div>
        </>
    )
}
export default Youtube;