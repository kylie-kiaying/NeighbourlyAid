from pydantic import BaseModel, EmailStr, constr

class UserLogin(BaseModel):
    email: EmailStr
    password: constr(min_length=8)  

class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserDisplay(UserBase):
    id: int
    profile_picture: str = None
    bio: str = None

    class Config:
        orm_mode = True
