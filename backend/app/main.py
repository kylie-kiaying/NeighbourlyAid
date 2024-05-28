from app.core.config import create_app
from app.routers.user_router import router


app = create_app()

app.include_router(router)
