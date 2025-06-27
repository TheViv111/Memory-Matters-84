
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';

interface BookingFormProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

const BookingForm = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }: BookingFormProps) => {
  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];

  return (
    <ScrollReveal direction="up" delay={0.2}>
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="font-playfair text-xl text-medical-charcoal text-center">
            Select Date & Time
          </CardTitle>
          <p className="text-center text-sm text-gray-600 font-inter">
            Choose your preferred appointment slot
          </p>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="font-inter font-medium text-medical-charcoal">
                Preferred Date *
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white border-2 hover:bg-gray-50 hover:border-medical-teal transition-all duration-200",
                      !selectedDate && "text-muted-foreground",
                      selectedDate && "border-medical-teal/50"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-medical-teal" />
                    {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white border-2 border-medical-teal/20 shadow-lg" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    className="rounded-md bg-white pointer-events-auto"
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label className="font-inter font-medium text-medical-charcoal">
                Preferred Time *
              </Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="border-2 hover:border-medical-teal transition-all duration-200 bg-white">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-medical-teal/20">
                  {availableTimes.map((time) => (
                    <SelectItem 
                      key={time} 
                      value={time}
                      className="hover:bg-medical-teal/10 focus:bg-medical-teal/10"
                    >
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {selectedDate && selectedTime && (
            <div className="mt-6 p-4 bg-gradient-to-r from-medical-teal/10 to-medical-deep-blue/10 rounded-lg border border-medical-teal/30">
              <div className="text-center">
                <p className="font-inter text-sm text-gray-600 mb-1">Your Selected Appointment</p>
                <p className="font-playfair text-lg font-semibold text-medical-charcoal">
                  {format(selectedDate, "EEEE, MMMM do, yyyy")} at {selectedTime}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export default BookingForm;
