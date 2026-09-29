#!/bin/zsh
# Keep the caller's current directory as Claude's working directory.
mod_dir="${0:A:h}"
export CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=1
exec claude --plugin-dir "$mod_dir" "$@"
