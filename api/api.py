from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Dados em memória (por enquanto)
dados = {
    "convocacoes": [],
    "pads": [],
    "ipms": []
}

# Liberar acesso ao GitHub Pages
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- ROTAS DO PAINEL ----------

@app.get("/dashboard")
def dashboard():
    return {
        "convocacoes": len(dados["convocacoes"]),
        "pads": len(dados["pads"]),
        "ipms": len(dados["ipms"])
    }

@app.get("/convocacoes")
def listar_convocacoes():
    return dados["convocacoes"]

@app.get("/pads")
def listar_pads():
    return dados["pads"]

@app.get("/ipms")
def listar_ipms():
    return dados["ipms"]

# ---------- ROTAS PARA O BOT ENVIAR ----------

@app.post("/add/convocacao")
def add_convocacao(item: dict):
    dados["convocacoes"].append(item)
    return {"status": "ok"}

@app.post("/add/pad")
def add_pad(item: dict):
    dados["pads"].append(item)
    return {"status": "ok"}

@app.post("/add/ipm")
def add_ipm(item: dict):
    dados["ipms"].append(item)
    return {"status": "ok"}
