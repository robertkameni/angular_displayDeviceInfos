# angular_displayDeviceInfos

Es wird in dieser Repo mit Angular und Typescript entwickelt.
Die Geräteübersicht zeigt einen Button bei dem .json-Dateien hochgeladen werden können. Nach 
dem Upload sollen alle Geräte aufgelistet werden. Wird ein Gerät angeklickt kommt man auf die 
Detail-Ansicht des entsprechenden Gerätes

Folgende Informationen sollen auf der Geräteübersicht präsentiert werden:
o Name
o Failsafe
o DeviceTypeId

Auf der Detail-Ansicht werden erweiterte Informationen des Gerätes angezeigt und mit einem Zurück 
Button kann auf die Geräteübersicht navigiert werden.

Folgende Informationen sollen auf der Detail-Ansicht präsentiert werden:
o Name
o Failsafe
o DeviceTypeId
o TempMin / TempMax
o InstallationPosition
o InsertInto19InchCabinet
o TerminalElement (Falls vorhanden, sonst nichts)
o AdvancedEnvironmentConditions (Falls vorhanden, sonst nichts

Um diese Aufgabe zu lösen, musste ich in dem Backend die json-server technologie verwenden, die es mir ermöglichte, mein Backend zu konfigurieren und die json-Daten zu lesen.

Bevor Sie also diese Anwendung starten, ist es wichtig, dass Sie zuerst:
 - Führen Sie im server Ordner den Befehl:  npm run start
 - Neuen Terminal öffnen und den Befehl ausführen: ng server
