from fastapi import FastAPI
from dotenv import load_dotenv
from app.config import settings
from app.database import engine
from app.routes import router

load_dotenv()
app = FastAPI()

app.include_router(router)

@app.on_event("startup")
def startup_event():
    engine.connect()
