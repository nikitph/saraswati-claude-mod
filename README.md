# Saraswati for Claude Code

A small Claude Code mod that opens each session with **ॐ ऐं सरस्वत्यै नमः॥** and keeps **|| 卐 ||** centered above the prompt in Claude orange (`#D97757`). The upright Hindu swastika is used here as a traditional auspicious symbol.

The mod writes a UI notice and renders the AbovePrompt band. It makes no model calls, network requests, or filesystem changes, and preserves other mods’ content.

## Run

Clone this repository. From the project you want to work in, run:

```sh
/path/to/saraswati-claude-mod/start.command
```

The macOS/zsh launcher retains your current working directory and forwards Claude arguments. Alternatively:

```sh
CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=1 claude --plugin-dir /path/to/saraswati-claude-mod
```

To include the mod in every interactive zsh `claude` launch, add this function to your `.zshrc`, replacing the path:

```sh
claude() {
  CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=1 command claude \
    --plugin-dir /path/to/saraswati-claude-mod "$@"
}
```

This does not configure Claude Desktop. Function hooks are early access and may change between releases. Managed policies and safe mode can prevent loading.

## Demos

| File | Description |
| --- | --- |
| [Concept video](demos/saraswati-demo.mp4) | Original polished 15-second visual concept. |
| [Synthetic terminal video](demos/saraswati-concept-terminal.mp4) | A 15-second scripted terminal demo with a presentation skin. |
| [Synthetic terminal cast](demos/saraswati-concept.cast) | Authored asciicast v2 events; illustrative activity, not an actual execution. |
| [Real terminal video](demos/saraswati-real-terminal.mp4) | Replay of real Claude Code output: startup mantra, pinned symbol, and Python returning `144`. |
| [Real terminal cast](demos/saraswati-real-terminal.cast) | Original timestamped terminal output. |

The real session’s Claude login had expired: local Python execution succeeded, but a model response was unavailable. That notice is retained in the recording. The real video is a terminal-output replay, not a macOS desktop screen capture.

The synthetic video uses a serif title and enlarged Sanskrit and symbol typography. Standard cast players use their own fonts and cell layouts, so their appearance differs.

## Customize

Edit `MANTRA`, `SYMBOL`, and the color in [hooks/register.js](hooks/register.js). No dependency installation or build step is needed.

## Validation

```sh
CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=1 claude plugin validate . --json
```

Manifest and hook validation passed. Live startup verified on Claude Code 2.1.281; centered orange symbol and local command execution verified on 2.1.284.
