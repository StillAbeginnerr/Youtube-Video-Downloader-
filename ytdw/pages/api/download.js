import ytdl from 'ytdl-core';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const url = JSON.parse(req.body).url;
    if (!url) res.status(404).send('No url provided');
    ytdl(url, {format: 'mp4'}).pipe(
      res.setHeader('Content-disposition', 'attachment; filename=Video.mp4')
    );
  }else if(req.method === 'GET'){
    res.send("Download Api");
  }else{
    res.status(404).end();
  }
}
