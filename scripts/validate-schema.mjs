#!/usr/bin/env node
import { spawnSync } from 'node:child_process'

const steps = [
  ['npx', ['--yes', 'tsx', 'scripts/validate-schema.mts']],
  ['npx', ['--yes', 'tsx', 'scripts/validate-schema-remote.mts']],
]

for (const [cmd, args] of steps) {
  const result = spawnSync(cmd, args, { stdio: 'inherit' })
  if (result.status) process.exit(result.status)
}
