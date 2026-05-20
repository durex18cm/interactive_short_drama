$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$prefix = "http://127.0.0.1:5173/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
$listener.Start()

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "application/javascript; charset=utf-8"
  ".md" = "text/plain; charset=utf-8"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".svg" = "image/svg+xml"
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $path = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($path)) {
    $path = "index.html"
  }

  $fullPath = Join-Path $root $path
  $resolved = Resolve-Path -LiteralPath $fullPath -ErrorAction SilentlyContinue

  if ($null -eq $resolved -or -not $resolved.Path.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
    $context.Response.StatusCode = 404
    $bytes = [System.Text.Encoding]::UTF8.GetBytes("Not found")
  } else {
    $ext = [System.IO.Path]::GetExtension($resolved.Path).ToLowerInvariant()
    $context.Response.ContentType = $mime[$ext]
    if ([string]::IsNullOrWhiteSpace($context.Response.ContentType)) {
      $context.Response.ContentType = "application/octet-stream"
    }
    $bytes = [System.IO.File]::ReadAllBytes($resolved.Path)
  }

  $context.Response.ContentLength64 = $bytes.Length
  $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  $context.Response.OutputStream.Close()
}
