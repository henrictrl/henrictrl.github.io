# Servidor local do site novo, sem cache (o navegador sempre pega a versão mais recente das páginas).
# Uso: python3 scripts/v2/servidor.py   (abre em http://127.0.0.1:8642/)
import http.server, os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()
    def log_message(self, *a):
        pass
http.server.ThreadingHTTPServer(('127.0.0.1', 8642), H).serve_forever()
