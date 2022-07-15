from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

from endpoints import createPost, getPosts


origins = ["*"]

app = FastAPI()

#----------КОРСЫ----------
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#----------КОРСЫ----------

class postModel(BaseModel):
    post_theme: str
    post_text: str

        
@app.post("/api/createPost/")
async def create_post(model: postModel):
    return createPost(model.post_theme, model.post_text)

@app.get("/api/getPosts/")
async def get_posts():
    return getPosts()

if __name__ == '__main__':
    uvicorn.run("main:app",
                host="0.0.0.0",
                port=8000,
                reload=True,
                )

