from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from app.config import settings
from jose import jwt

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

@router.post("/token")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Replace this with your actual authentication logic
    user = "test"
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    access_token = jwt.encode({"sub": user}, settings.SECRET_KEY, algorithm="HS256")
    return {"access_token": access_token, "token_type": "bearer"}