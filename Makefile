.PHONY: install dev lint clean

install: 
	pnpm install

dev: install
	pnpm dev

lint: 
	pnpm lint

clean: node_modules/ .next/
	rm -rf node_modules .next