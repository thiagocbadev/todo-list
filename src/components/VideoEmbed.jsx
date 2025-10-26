const VideoEmbed = () => {

    const videoId = '809suM-v8T8';
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className='video-container' style={{
            marginTop: '30px',
            marginBottom: '30px',
            textAlign: 'center',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px'
        }}>
            <h2>🎥 Por que usar Listas de Tarefas?</h2>
            <iframe
                width="100%"
                height="315"
                src={embedUrl}
                title="A Importância de Ter Uma Lista de Tarefas!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ maxWidth: '560px', border: '1px solid #ccc', borderRadius: '8px' }}
            ></iframe>
        </div>
    );
};

export default VideoEmbed;