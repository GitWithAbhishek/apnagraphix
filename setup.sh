#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════════
#  setup.sh – ApnaGraphix Next.js + Express MERN Stack Setup Script
# ═══════════════════════════════════════════════════════════════════════════

set -e

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'
BLUE='\033[0;34m'; PURPLE='\033[0;35m'; CYAN='\033[0;36m'
BOLD='\033[1m'; RESET='\033[0m'

echo -e "\n${PURPLE}${BOLD}"
echo "  ╔══════════════════════════════════════════════════════╗"
echo "  ║    ApnaGraphix – Next.js + Express MERN Setup 🚀    ║"
echo "  ╚══════════════════════════════════════════════════════╝"
echo -e "${RESET}\n"

info()    { echo -e "${CYAN}  ℹ  $1${RESET}"; }
success() { echo -e "${GREEN}  ✅ $1${RESET}"; }
warn()    { echo -e "${YELLOW}  ⚠️  $1${RESET}"; }
error()   { echo -e "${RED}  ❌ $1${RESET}"; exit 1; }
step()    { echo -e "\n${BLUE}${BOLD}── $1${RESET}"; }

# ── Step 1: Prerequisites ────────────────────────────────────
step "Checking Prerequisites"

command -v node &>/dev/null || error "Node.js not found → https://nodejs.org/"
NODE_VER=$(node -v)
success "Node.js $NODE_VER"

NODE_MAJOR=$(echo "$NODE_VER" | sed 's/v//' | cut -d. -f1)
[ "$NODE_MAJOR" -lt 18 ] && warn "Node.js 18+ recommended for Next.js 14"

command -v npm &>/dev/null || error "npm not found"
success "npm v$(npm -v)"

if command -v mongod &>/dev/null; then
  success "MongoDB: $(mongod --version | head -1)"
else
  warn "MongoDB not found. Install locally OR use MongoDB Atlas cloud and update backend/.env"
fi

# ── Step 2: Environment ──────────────────────────────────────
step "Setting Up Environment"

if [ ! -f "backend/.env" ]; then
  cp backend/.env.example backend/.env
  success ".env created from template"
  info "📝 Edit backend/.env with your MONGO_URI if needed"
else
  info "backend/.env already exists — skipping"
fi

# ── Step 3: Install dependencies ────────────────────────────
step "Installing Root Dependencies"
npm install && success "Root OK"

step "Installing Backend Dependencies"
cd backend && npm install && cd .. && success "Backend OK"

step "Installing Frontend Dependencies (Next.js 14)"
cd frontend && npm install && cd .. && success "Frontend OK"

# ── Step 4: Launch ───────────────────────────────────────────
echo ""
echo -e "${GREEN}${BOLD}╔═══════════════════════════════════════════════════╗${RESET}"
echo -e "${GREEN}${BOLD}║       ApnaGraphix is starting up! 🚀              ║${RESET}"
echo -e "${GREEN}${BOLD}╚═══════════════════════════════════════════════════╝${RESET}"
echo ""
echo -e "  ${CYAN}Frontend (Next.js):${RESET}   http://localhost:3000"
echo -e "  ${CYAN}Backend (Express):${RESET}    http://localhost:5000"
echo -e "  ${CYAN}Health check:${RESET}         http://localhost:5000/api/health"
echo -e "  ${CYAN}Sitemap:${RESET}              http://localhost:3000/sitemap.xml"
echo -e "  ${CYAN}Robots.txt:${RESET}           http://localhost:3000/robots.txt"
echo ""
echo -e "  ${YELLOW}Press Ctrl+C to stop both servers${RESET}\n"

npm run dev