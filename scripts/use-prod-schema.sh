#!/usr/bin/env sh
set -e

if [ ! -f prisma/schema.prod.prisma ]; then
  echo "ERROR: prisma/schema.prod.prisma not found"
  exit 1
fi

cp prisma/schema.prod.prisma prisma/schema.prisma
echo "Copied prisma/schema.prod.prisma -> prisma/schema.prisma"