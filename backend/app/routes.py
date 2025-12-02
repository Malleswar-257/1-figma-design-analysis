from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from app.database import Session
from app.models import Data
from app.config import settings
from jose import jwt

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

@router.get("/api/data")
def get_data(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
    except:
        return {"error": "Invalid token"}

    session = Session()
    data = session.query(Data).all()
    session.close()

    return [{"id": d.id, "value": d.value} for d in data]

@router.post("/api/filter")
def filter_data(token: str = Depends(oauth2_scheme), filter_value: str = None):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
    except:
        return {"error": "Invalid token"}

    session = Session()
    if filter_value:
        data = session.query(Data).filter(Data.value.like(f"%{filter_value}%"))
    else:
        data = session.query(Data)

    session.close()

    return [{"id": d.id, "value": d.value} for d in data]