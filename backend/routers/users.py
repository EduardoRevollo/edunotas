from fastapi import APIRouter

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/")
def list_users():
    return ["user1", "user2"]
