import { useState } from "react";

const Meme = ({meme, setMeme}) => {
    const [form, setForm] = useState({
        template_id:meme.id,
        username:"Audi07",
        password:"demo@1234",
        boxes: []
    });

    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((box, index) => {
            url += `&boxes[${index}][text]=${box.text}`;
        });
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            data.success === true ?
                setMeme({...meme, url: data.data.url})
            :
                setMeme({...meme, url: ""})

        });
    }

    return(
        <div className="meme">
            <img src={meme.url} alt={meme.name} />
            <div>
                {
                    [...Array(meme.box_count)].map((_, idx) => (
                        <input 
                        key={idx} 
                        type="text" 
                        placeholder={`Meme Caption ${idx+1}`} onChange={(e) => {
                            const newBoxes = form.boxes;
                            newBoxes[idx] = {text: e.target.value};
                            setForm({...form, boxes: newBoxes});
                        }} />
                    ))
                }
            </div>
            <div>
                <button onClick={generateMeme}>Generate Meme</button>
                <button 
                    onClick={()=> {
                        setMeme(null);
                    }}>Choose Template</button>
            </div>   
        </div>
    )
}

export default Meme;