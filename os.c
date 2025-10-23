#include <windows.h>
#include <stdio.h>

int main() {
    STARTUPINFO si;
    PROCESS_INFORMATION pi;

    ZeroMemory(&si, sizeof(si));   // Initialize structures
    si.cb = sizeof(si);
    ZeroMemory(&pi, sizeof(pi));

    printf("Parent Process ID: %lu\n", GetCurrentProcessId());

    // Create a new child process (new instance of cmd)
    if (CreateProcess(NULL, "cmd.exe", NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi)) {
        printf("Child Process Created!\n");
        printf("Child Process ID: %lu\n", pi.dwProcessId);

        // Wait for child to finish
        WaitForSingleObject(pi.hProcess, INFINITE);
        CloseHandle(pi.hProcess);
        CloseHandle(pi.hThread);
    } else {
        printf("Failed to create child process.\n");
    }

    return 0;
}
